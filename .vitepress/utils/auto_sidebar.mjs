import path from "node:path";
import fs from "node:fs";

// 基础目录，指向 docs
const DIR_PATH = path.resolve(process.cwd());

// 白名单（要排除的）
const WHITE_LIST = [
  ".vitepress",
  "node_modules",
  ".idea",
  "assets",
];

// 判断是否是文件夹
const isDirectory = (p) => fs.lstatSync(p).isDirectory();

// 过滤掉白名单
const filterWhiteList = (files) =>
  files.filter((f) => !WHITE_LIST.includes(f));

function getList(files, parentPath, pathname) {
  const res = [];

  for (const file of files) {
    const fullPath = path.join(parentPath, file);

    if (isDirectory(fullPath)) {
      // 文件夹，递归
      const children = fs.readdirSync(fullPath);
      res.push({
        text: file,
        collapsible: true,
        items: getList(children, fullPath, `${pathname}/${file}`),
      });
    } else {
      // 文件
      const ext = path.extname(file);
      if (ext !== ".md") continue;

      const baseName = path.basename(file, ".md");

      // 特殊处理 index.md
      if (baseName === "index") {
        res.unshift({
          text: "Index",
          link: `/${pathname}/`,
        });
      } else {
        res.push({
          text: baseName,
          link: `/${pathname}/${baseName}`,
        });
      }
    }
  }

  return res;
}

export function set_sidebar(pathname) {
  const dirPath = path.join(DIR_PATH, pathname);
  const files = fs.readdirSync(dirPath);
  const items = filterWhiteList(files);

  return getList(items, dirPath, pathname);
}