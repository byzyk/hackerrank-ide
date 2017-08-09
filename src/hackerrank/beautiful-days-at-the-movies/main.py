temp = map(int, raw_input().split())
i = temp[0]
j = temp[1]
k = temp[2]
res = 0

for day in range(i, j+1):
    a = day
    b = int(str(day)[::-1])

    if (a - b) % k == 0:
        res += 1

print res
