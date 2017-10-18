n = int(input())
arr = map(int, raw_input().split(' '))

for i in range(n):
    print arr.index(arr.index(i + 1) + 1) + 1
