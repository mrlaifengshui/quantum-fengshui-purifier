// 仅保留必要导入，移除硬编码多语言内容
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext'; // 语言上下文（项目已存在）
import ReactMarkdown from 'react-markdown'; // 导入MD解析组件

// 关键：指定该组件对应public/blog下的MD文件名（和前置准备的文件名一致）
const BLOG_FILE_NAME = '2026-guide.md';

const BlogArticle4 = () => {
  // 1. 获取当前语言（zh-HK 或 en）
  const { language } = useContext(LanguageContext);
  // 2. 存储加载的MD博客内容
  const [markdownContent, setMarkdownContent] = useState('');

  // 3. 语言切换时，动态加载对应目录的MD文件
  useEffect(() => {
    // 映射语言：zh-HK → 加载zh目录，en → 加载en目录
    const langDir = language === 'en' ? 'en' : 'zh';
    // public目录下的文件可直接通过 / 访问，路径格式：/blog/语言目录/文件名.md
    const mdFilePath = `/blog/${langDir}/${BLOG_FILE_NAME}`;

    // 加载MD文件
    fetch(mdFilePath)
      .then(response => {
        // 若文件不存在，提示错误
        if (!response.ok) throw new Error(`无法加载博客文件：${mdFilePath}`);
        return response.text(); // 读取MD文本内容
      })
      .then(content => {
        setMarkdownContent(content); // 把MD内容存入状态
      })
      .catch(err => {
        console.error('博客加载失败：', err);
        // 降级提示（可选，避免页面空白）
        setMarkdownContent(`# 博客加载失败\n请检查文件路径：${mdFilePath}`);
      });
  }, [language]); // 仅当语言变化时重新加载

  // 4. 渲染MD内容（无需硬编码任何中文/英文）
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <ReactMarkdown 
        style={{ 
          lineHeight: '1.8', 
          fontSize: '16px',
          '& h1': { fontSize: '28px', marginBottom: '20px' },
          '& h2': { fontSize: '24px', margin: '15px 0' },
          '& p': { marginBottom: '10px' }
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default BlogArticle4;
