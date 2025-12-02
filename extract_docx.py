from docx import Document
import sys
import os

def extract_text(docx_path):
    doc = Document(docx_path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    return '\n'.join(full_text)

# Extract all DOCX files
docx_files = [
    '/home/user/uploaded_files/量子風水空氣淨化服務網站_-_重新整理的結構文檔.docx',
    '/home/user/uploaded_files/WEBSITE_DESIGN_COMPLETE.md.docx',
    '/home/user/uploaded_files/WEBSITE_OUTLOOK.md.docx',
    '/home/user/uploaded_files/量子風水空氣淨化服務網站_-_完整_Sitemap.docx'
]

for docx_file in docx_files:
    if os.path.exists(docx_file):
        basename = os.path.basename(docx_file).replace('.docx', '.txt')
        output_file = f'/home/user/webapp/{basename}'
        text = extract_text(docx_file)
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Extracted: {basename}")

