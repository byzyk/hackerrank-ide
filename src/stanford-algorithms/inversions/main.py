arr = map(int, raw_input().split())

def mergeSort(arr):
    n = len(arr)

    if (n == 1):
        return arr

#TODO: try to get insertion value out of this func,
#      seprate from main mergeSort() stream

    left = mergeSort(arr[:n/2])
    right = mergeSort(arr[n/2:])

    return merge(left, right)

def merge(left, right):
    result = []
    insertions = 0

    while len(left) and len(right):
        if(left[0] > right[0]):
            result.append(right.pop(0))
        else:
            result.append(left.pop(0))
            insertions += 1

    result.extend(left)
    result.extend(right)

    return result, insertions

r = mergeSort(arr)

print(r)
