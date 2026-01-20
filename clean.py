import os
import re

def remove_file_links(directory):
    # 正则表达式说明：
    # \[([^\]]+)\] : 匹配中括号内的文本（捕获组 1）
    # \(\s*([^)]+)\s*\) : 匹配圆括号内的链接，忽略首尾空格（捕获组 2）
    link_pattern = re.compile(r'\[([^\]]+)\]\(\s*([^)]+)\s*\)')

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                def replacement(match):
                    text = match.group(1)   # 中括号里的文字
                    link = match.group(2).strip() # 圆括号里的链接
                    
                    # 过滤逻辑：
                    # 如果链接是以 # 开头（锚点）或以 http 开头（外部链接），通常建议保留
                    # 如果是类似 src/、build/ 或带有文件后缀名的路径，则判定为“文件超链接”进行剔除
                    if link.startswith('#') or link.startswith('http'):
                        return match.group(0) # 返回原样，不修改
                    
                    return text # 只返回文字，去掉链接部分

                new_content = link_pattern.sub(replacement, content)

                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"已清理: {file_path}")

if __name__ == "__main__":
    # 请确保路径指向你的 docs/content 目录
    target_directory = r"e:\game\dda\docusaurus\my-website\docs\content"
    
    if os.path.exists(target_directory):
        remove_file_links(target_directory)
        print("清理完成。")
    else:
        print(f"错误：找不到目录 {target_directory}")