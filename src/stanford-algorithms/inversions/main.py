import sys

arr = map(int, sys.stdin.readlines())
N = len(arr)/2
insertions = 0

def mergeSort(arr):
    n = len(arr)

    if (n == 1):
        return arr

    left = mergeSort(arr[:n/2])
    right = mergeSort(arr[n/2:])

    return merge(left, right)

def merge(left, right):
    global insertions
    result = []
    n = len(left)

    while len(left) and len(right):
        if(left[0] < right[0]):
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
            insertions += len(left)


    result.extend(left)
    result.extend(right)

    if (n == N):
        print insertions

    return result

res = mergeSort(arr)
