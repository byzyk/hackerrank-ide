for a0 in range(int(input().strip())):
    S = input().strip()
    R = S[::-1]

    print('Funny' if all((abs(ord(S[i]) - abs(ord(S[i-1]))) == abs(ord(R[i]) - ord(R[i-1]))) for i in range(1, len(S))) else 'Not Funny')
