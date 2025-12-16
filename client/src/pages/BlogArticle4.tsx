import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown'; // 导入MD解析组件

// 定义当前博客对应的MD文件名（与public/blog/zh/en下的文件名一致）
const BLOG_FILE_NAME = '2026-guide.md';

const BlogArticle4 = () => {
  const { language } = useContext(LanguageContext); // 获取当前语言（zh-HK/en）
  const [markdownContent, setMarkdownContent] = useState(''); // 存储加载的MD内容

  // 动态加载对应语言的MD文件
  useEffect(() => {
    // 映射语言标识：zh-HK → zh 目录，en → en 目录
    const langDir = language === 'en' ? 'en' : 'zh';
    // 构建MD文件路径（public目录下的文件可直接通过/访问）
    const mdFilePath = `/blog/${langDir}/${BLOG_FILE_NAME}`;

    // 加载MD文件
    fetch(mdFilePath)
      .then(response => {
        if (!response.ok) throw new Error('博客文件加载失败');
        return response.text(); // 读取MD文本内容
      })
      .then(content => {
        setMarkdownContent(content); // 存入状态
      })
      .catch(err => {
        console.error('加载博客失败：', err);
        // 降级显示提示（可选）
        setMarkdownContent(`# 加载失败\n无法加载 ${mdFilePath} 文件，请检查路径是否正确`);
      });
  }, [language]); // 语言切换时重新加载

  return (
    <div className="blog-page-container">
      {/* 渲染Markdown内容 */}
      <ReactMarkdown className="blog-content">
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default BlogArticle4;
