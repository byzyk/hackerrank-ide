import re

q = int(input().strip())

for a0 in range(q):
    s = input().strip()
    print((re.search('.*'.join("hackerrank"), s) and "YES") or "NO")
