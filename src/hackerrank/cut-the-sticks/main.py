n = int(raw_input())
arr = map(int, raw_input().split(' '))

arr.sort()


def cutSticks(sticks):
    l = len(sticks)

    if l > 0:
        print l
        smallest = sticks[0]
        newSticks = list(filter(lambda x: x > 0, [(x - smallest) for x in sticks]))
        cutSticks(newSticks)


cutSticks(arr)
