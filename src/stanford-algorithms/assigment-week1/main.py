x = int(raw_input())
y = int(raw_input())

def karatsuba(n1, n2):
    if (n1 < 10) or (n2 < 10):
        return n1 * n2

    str1 = str(n1)
    str2 = str(n2)

    len1 = len(str1)
    len2 = len(str2)

    n = max(len1, len2)
    if (n % 2 != 0) or (len1 != len2):
        n += 1
        pad1 = ''.join(['0'] * (n - len1))
        pad2 = ''.join(['0'] * (n - len2))
        str1 = pad1 + str1
        str2 = pad2 + str2
    m = n / 2

    a, b = int(str1[:m]), int(str1[m:])
    c, d = int(str2[:m]), int(str2[m:])

    ac = karatsuba(a, c)
    bd = karatsuba(b, d)
    ad_bc = karatsuba((a + b), (c + d)) - ac - bd

    return ac * 10**n + (ad_bc * 10**m) + bd

res = karatsuba(x, y)
print(res)
