#!/bin/bash

echo "=== Healing Space Article Verification ==="
echo "Total paragraphs with explicit colors:"
grep -c 'text-gray-900 dark:text-gray-100">' HealingSpaceArticle.tsx

echo "Total list items with explicit colors:"
grep -c 'text-lg text-gray-900' HealingSpaceArticle.tsx

echo "Total spans with explicit colors:"
grep -c 'span className="text-gray-900' HealingSpaceArticle.tsx

echo ""
echo "=== Children's Room Article Verification ==="
echo "Total paragraphs with explicit colors:"
grep -c 'text-gray-900 dark:text-gray-100">' ChildrensRoomHealthArticle.tsx

echo "Total list items with explicit colors:"
grep -c 'text-lg text-gray-900' ChildrensRoomHealthArticle.tsx

echo "Total spans with explicit colors:"
grep -c 'span className="text-gray-900' ChildrensRoomHealthArticle.tsx

echo ""
echo "=== Checking for missing colors ==="
echo "Healing Space - paragraphs without color (should be 0):"
grep -c '<p className="text-lg[^"]*">[^<]' HealingSpaceArticle.tsx || echo "0"

echo "Children's Room - paragraphs without color (should be 0):"
grep -c '<p className="text-lg[^"]*">[^<]' ChildrensRoomHealthArticle.tsx || echo "0"
