n = int(input())
arr = list(map(int, raw_input().split(' ')))

print n - max([arr.count(x) for x in set(arr)])
