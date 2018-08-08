from ..மூலம் import நீட்டிப்பு_வார்ப்புரு


தகவல்கள் = ['𝋠', '𝋡', '𝋢', '𝋣', '𝋤', '𝋥', '𝋦', '	𝋧', '𝋨', '𝋩', '𝋪', '𝋫', '𝋬', '𝋭', '𝋮', '𝋯', '𝋰', '𝋱', '𝋲', '𝋳']
அக_தகவல்கள் = {அ: எ for எ, அ in enumerate(தகவல்கள்)}


class பதினமம்(நீட்டிப்பு_வார்ப்புரு):

    def எண்ணுக்கு(தன், உரை, மொழி="mayab'"):
        எண் = 0
        neg = உரை.startswith('-')
        if neg:
            உரை = உரை[1:]
        try:
            ent, dec = உரை.split('.')
        except ValueError:
            ent = உரை
            dec = None

        for அ in ent:
            எண் *= 20
            எண் += அக_தகவல்கள்[அ]

        if dec is not None:
            f = 20
            for i, அ in enumerate(dec):
                எண் += அக_தகவல்கள்[அ]/f
                f *= 20
        if neg:
            எண் *= -1

        return எண்

    def உரைக்கு(தன், எண், மொழி="mayab'", மொழி_மூலம்=None, தளம்=None):
        import math
        if எண் == 0:
            return தகவல்கள்[0]
        elif எண் < 0:
            neg = True
        else:
            neg = False
        neg = எண் < 0
        எண் = abs(எண்)
        ent = floor(எண்)
        try:
            dec = float('0.' + str(எண்).split('.')[1])
        except IndexError:
            dec = None

        n_p = math.floor(math.log(ent, 20)) + 1
        உரை = [தகவல்கள்[0]] * n_p
        for i in range(n_p):
            p = n_p - i - 1
            v = int(ent / (20 ** p))
            உரை[i] = தகவல்கள்[v]
            ent -= v * 20**p
        உரை = ''.join(உரை)

        if dec is not None:
            உரை += '.'
            while dec != 0:
                dec *= 20
                dec = round(dec, 5)
                உரை+= தகவல்கள்[int(dec)]
                dec -= int(dec)
        if neg:
            உரை = '-' + உரை
        return உரை

    def மொழிகள்(தன்):
        return ["mayab'"]

    def வழவெளி(தன், மொழி=None):
        raise ValueError

