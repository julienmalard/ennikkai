from math import floor

from ..மூலம் import நீட்டிப்பு_வார்ப்புரு


தகவல்கள் = ['𝋠', '𝋡', '𝋢', '𝋣', '𝋤', '𝋥', '𝋦', '	𝋧', '𝋨', '𝋩', '𝋪', '𝋫', '𝋬', '𝋭', '𝋮', '𝋯', '𝋰', '𝋱', '𝋲', '𝋳']
அக_தகவல்கள் = {அ: எ for எ, அ in enumerate(தகவல்கள்)}


class மாயாப்(நீட்டிப்பு_வார்ப்புரு):

    def எண்ணுக்கு(தன், உரை, மொழி="mayab'"):
        எண் = 0
        எதிர் = உரை.startswith('-')
        if எதிர்:
            உரை = உரை[1:]
        try:
            முழு, தசம = உரை.split('.')
        except ValueError:
            முழு = உரை
            தசம = None

        for அ in முழு:
            எண் *= 20
            எண் += அக_தகவல்கள்[அ]

        if தசம is not None:
            த = 20
            for எ, அ in enumerate(தசம):
                எண் += அக_தகவல்கள்[அ]/த
                த *= 20
        if எதிர்:
            எண் *= -1

        return எண்

    def உரைக்கு(தன், எண், மொழி="mayab'", மொழி_மூலம்=None, தளம்=None):
        import math
        if எண் == 0:
            return தகவல்கள்[0]
        எதிர் = எண் < 0
        எண் = abs(எண்)
        try:
            தசம = float('0.' + str(எண்).split('.')[1])
            முழு = floor(எண்)
        except IndexError:
            தசம = None
            முழு = எண்

        த_எ = math.floor(math.log(முழு, 20)) + 1
        உரை = [தகவல்கள்[0]] * த_எ
        for எ in range(த_எ):
            த = த_எ - எ - 1
            ம = int(முழு / (20 ** த))
            உரை[எ] = தகவல்கள்[ம]
            முழு -= ம * 20**த
        உரை = ''.join(உரை)

        if தசம is not None:
            உரை += '.'
            while தசம != 0:
                தசம *= 20
                தசம = round(தசம, 5)
                உரை+= தகவல்கள்[int(தசம)]
                தசம -= int(தசம)
        if எதிர்:
            உரை = '-' + உரை
        return உரை

    def மொழிகள்(தன்):
        return ["mayab'"]

    def வழவெளி(தன், மொழி=None):
        raise ValueError

