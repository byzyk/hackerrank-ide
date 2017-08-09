for _ in range(input()):
    total = 0
    n = int(raw_input().strip())
    arr = [int(d) for d in str(n)]
    for i in range(len(arr)):
        if arr[i] != 0 and n % arr[i] == 0:
            total += 1

    print total
