#!/bin/bash

# Fix HealingSpaceArticle.tsx
sed -i \
  -e 's/<p className="mt-1">/<p className="mt-1 text-gray-900 dark:text-gray-100">/g' \
  -e 's/<p className="mt-2">/<p className="mt-2 text-gray-900 dark:text-gray-100">/g' \
  -e 's/<p className="mt-4">/<p className="mt-4 text-gray-900 dark:text-gray-100">/g' \
  -e 's/<span className="font-semibold">/<span className="font-semibold text-gray-900 dark:text-gray-100">/g' \
  -e 's/<div>$/<div className="text-gray-900 dark:text-gray-100">/g' \
  -e 's/<span>$/<span className="text-gray-900 dark:text-gray-100">/g' \
  HealingSpaceArticle.tsx

# Fix ChildrensRoomHealthArticle.tsx
sed -i \
  -e 's/<p className="mt-1">/<p className="mt-1 text-gray-900 dark:text-gray-100">/g' \
  -e 's/<p className="mt-2">/<p className="mt-2 text-gray-900 dark:text-gray-100">/g' \
  -e 's/<p className="mt-4">/<p className="mt-4 text-gray-900 dark:text-gray-100">/g' \
  -e 's/<span className="font-semibold">/<span className="font-semibold text-gray-900 dark:text-gray-100">/g' \
  ChildrensRoomHealthArticle.tsx

echo "Fixed all text colors"
