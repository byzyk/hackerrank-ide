n = int(input())
arr = map(int, raw_input().split())

arr.sort()
lowest = arr[1] - arr[0]
res = [arr[0], arr[1]]

for i in range(1, n-1):
    count = arr[i+1] - arr[i]
    if count < lowest:
        lowest = count
        res = [arr[i], arr[i+1]]
    elif count == lowest:
        res.append(arr[i])
        res.append(arr[i+1])

print ' '.join(map(str,res))
