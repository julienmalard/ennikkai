from எண்ணிக்கை import உரைக்கு, எண்ணுக்கு, மொழிகள்


for மொ in மொழிகள்():
    உ = உரைக்கு(-123450.678, மொ, தளம்=False)
    print(மொ, ': ', உ)

    assert round(எண்ணுக்கு(உ), 3) == -123450.678, எண்ணுக்கு(உ)

print('-------')
for மொ in மொழிகள்():
    உ = உரைக்கு(-123450.678, மொ)
    print(மொ, ': ', உ)

    assert round(எண்ணுக்கு(உ), 3) == -123450.678, (மொ, உ, எண்ணுக்கு(உ))

