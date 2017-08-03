arr = map(int, raw_input().split())

def mergeSort(arr):
    n = len(arr)

    if (n == 1):
        return arr

    left = mergeSort(arr[:n/2])
    right = mergeSort(arr[n/2:])

    return merge(left, right)

def merge(left, right):
    result = []

    while len(left) and len(right):
        if(left[0] > right[0]):
            result.append(right.pop(0))
        else:
            result.append(left.pop(0))

    result.extend(left)
    result.extend(right)

    return result

res = mergeSort(arr)

print(' '.join(map(str,res)))
