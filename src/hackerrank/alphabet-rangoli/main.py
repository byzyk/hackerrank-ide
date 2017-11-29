from string import ascii_lowercase as alpha


def print_rangoli(n):
    arr = []
    for i in range(n):
        s = '-'.join(alpha[i:n])
        arr.append((s[::-1] + s[1:]).center(4*n-3, '-'))
    print('\n'.join(arr[:0:-1]+arr))


n = int(input())
print_rangoli(n)
