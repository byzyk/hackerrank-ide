def super_reduced_string(arr):
    res = []
    for c in s:
        if res and res[len(res)-1] == c:
            res.pop()
        else:
            res.append(c)
    res = ''.join(res)
    return res or 'Empty String'

s = list(raw_input().strip())
print(super_reduced_string(s))
