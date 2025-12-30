#!/bin/bash

# Backup files
cp HealingSpaceArticle.tsx HealingSpaceArticle.tsx.complex
cp ChildrensRoomHealthArticle.tsx ChildrensRoomHealthArticle.tsx.complex

# Replace the complex colored boxes with simple prose styling in both files
# The key changes:
# 1. Wrap article content in <article className="prose prose-lg max-w-none">
# 2. Remove all the custom text-gray-900 dark:text-gray-100 classes
# 3. Let prose handle all the typography automatically
# 4. Use text-foreground for headings and text-muted-foreground for regular text

echo "Simplifying articles to match insomnia article style..."

# For HealingSpaceArticle.tsx - change the article wrapper
sed -i '/<article className="py-16">/,/<\/article>/ {
  s/<article className="py-16">/<div className="py-8 md:py-12"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><article className="prose prose-lg max-w-none">/
  s/<\/article>/<\/article><\/div><\/div>/
}' HealingSpaceArticle.tsx

# For ChildrensRoomHealthArticle.tsx - change the article wrapper  
sed -i '/<article className="py-16">/,/<\/article>/ {
  s/<article className="py-16">/<div className="py-8 md:py-12"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><article className="prose prose-lg max-w-none">/
  s/<\/article>/<\/article><\/div><\/div>/
}' ChildrensRoomHealthArticle.tsx

echo "Done! Articles now use prose classes for automatic typography."
