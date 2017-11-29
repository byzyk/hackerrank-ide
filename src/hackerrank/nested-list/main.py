n = int(input())
sheet = [[input(), float(input())] for _ in range(n)]

second = sorted(list(set([mark for _, mark in sheet])))[1]
print('\n'.join(sorted([name for name, mark in sheet if mark == second])))
