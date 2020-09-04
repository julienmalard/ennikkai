import தகவல்கள் from './தகவல்கள்.json'
export const முறைமைகள் = Array.from(Object.keys(தகவல்கள்))


function உரைக்கு_இடஞ்சார்(எண், தகவல்_மொழி) {

  const குறிகள் = [...தகவல்_மொழி['குறிகள்']]
  const அடி = குறிகள்.length
  const பிரிப்பு = (தகவல்_மொழி['பிரிப்பு'] || '.')[0]

  if (அடி === 10) {
    var உரை = எண்.toString()
    if (உரை.includes('.')) {
      உரை = உரை.replace('.', பிரிப்பு)
    }
    return Array.prototype.map.call(உரை, x => x === பிரிப்பு ? x : குறிகள்[parseInt(x)]).join('')
  }

  if (எண் === 0) {
    return குறிகள்[0]
  }

  const எதிர் = எண் < 0

  var தசம = எண் % 1
  தசம = parseFloat(தசம.toFixed(எ_சுற்று(எண்)))
  எண் = Math.abs(எண்)

  var உரை = ""
  while (எண்) {
      உரை = குறிகள்[Math.floor(எண் % அடி)] + உரை
      எண் = Math.floor(எண் / அடி)
  }
  if (தசம) {
    உரை += பிரிப்பு
  }

  while (தசம !== 0) {
    var சுற்று = எ_சுற்று(தசம)
    தசம *= அடி
    உரை += குறிகள்[parseInt(தசம)]
    தசம -= parseInt(தசம)
    தசம = parseFloat(தசம.toFixed(சுற்று))
  }

  if (எதிர்) {
    உரை = '-' + உரை
  }
  return உரை
}

function எ_சுற்று(எண்) {
    const உ = எண்.toString()
    if (உ.includes('e')) {
      const [ச, த] = உ.split('e-')
      return parseInt(த) + ச.length
    } else {
      return உ.length
    }
}

function _அடிமானம்_எழுதல்(எண், குறிகள், அடிமானங்கள்) {
  var மீதி = எண்
  var உரை = ''

  அடிமானங்கள் = Object.entries(அடிமானங்கள்).sort(function(a,b) {return b[1]-a[1]})
  for (const [அடி, மதிப்பு] of அடிமானங்கள்) {
      var ம = parseInt(மீதி / மதிப்பு)
      if (ம) {
        மீதி -= ம * மதிப்பு
        if (ம !== 1) {
          உரை += _அடிமானம்_எழுதல்(ம, குறிகள், அடிமானங்கள்)
        }
        உரை += அடி
      }
    }

  if (மீதி) {
    உரை = உரை + குறிகள்[parseInt(மீதி)]
  }

  return உரை
}

function உரைக்கு_அடிமானம்(எண், குறிகள், அடிமானங்கள்) {

  குறிகள் = [...குறிகள்]

  const எதிர் = எண் < 0
  எண் = Math.abs(எண்)

  var உரை = _அடிமானம்_எழுதல்(எண், குறிகள், அடிமானங்கள்)

  if (உரை.length === 0) {
    உரை = குறிகள்[0]
  }

  if (எதிர்){
    உரை = '-' + உரை
  }

  return உரை

}

function எண்ணுக்கு_இடஞ்சார்(உரை, தகவல்_மொழி) {

    const குறிகள் = [...தகவல்_மொழி['குறிகள்']]
    const அடுக்குக்குறி = தகவல்_மொழி['அடுக்குக்குறி'] || "eE"
    const அடிமானம் = குறிகள்.length
    const பிரிப்பு = தகவல்_மொழி['பிரிப்பு'] || "."

    உரை = உரை.trim('+')
    if (அடுக்குக்குறி.split("").some(அடு => உரை.includes(அடு))) {
      var [எண், அடு] = உரை.split(RegExp(தன்.அடுக்குக்குறி))
      return எண்ணுக்கு_இடஞ்சார்(எண்) * அடிமானம் ** எண்ணுக்கு(அடு)
    }

    if (அடிமானம் === 10) {
      for (const [எ, குறி] of குறிகள்.entries()) {
        உரை = உரை.replace(குறி, எ)
      }
      for (const பி of பிரிப்பு.split("")) {
        உரை = உரை.replace(பி, ".")
      }
      return parseFloat(உரை)
    } else {

      var எண் = 0
      var [முழு, தசம] = உரை.split(/\./)

      var எதிர் = முழு[0] === '-'
      முழு = முழு.trim('-')
      if (முழு) {
        for (const அ of முழு) {
          எண் *= அடிமானம்
          எண் += குறிகள்.indexOf(அ)
        }
      }
    }
    if (தசம) {
      var த = அடிமானம்
      for (const அ of தசம) {
        எண் += குறிகள்.indexOf(அ) / த
        எண் = parseFloat(எண்.toFixed(எ_சுற்று(1 / த)))
        த *= அடிமானம்
      }
    }
    எண் = எதிர் ? -எண் : எண்
    return எண்
}

function தகவல்கள்_பெறு(மொழி) {
    const தகவல்_மொழி = தகவல்கள்[மொழி]
    if (!தகவல்_மொழி) {
      throw Error(`தெரியாத எண்ணுரு முறைமை ${மொழி}`)
    }
    return தகவல்_மொழி
}

export const உரைக்கு = (எண், மொழி) => {
    const தகவல்_மொழி = தகவல்கள்_பெறு(மொழி)

    const வகை = தகவல்_மொழி['வகை']
    if (வகை === 'இடஞ்சார்') {
      return உரைக்கு_இடஞ்சார்(எண், தகவல்_மொழி)
    } else if (வகை === 'அடிமானம்') {
      return உரைக்கு_அடிமானம்(எண், தகவல்_மொழி['குறிகள்'], தகவல்_மொழி['அடிமானங்கள்'])
    } else {
      throw Error(`தெரியாத எண்ணுரு முறைமை வகை ${வகை}`)
    }
}


export const எண்ணுக்கு = (எண், மொழி) => {
    const தகவல்_மொழி = தகவல்கள்_பெறு(மொழி)

    const வகை = தகவல்_மொழி['வகை']
    if (வகை === 'இடஞ்சார்') {
      return எண்ணுக்கு_இடஞ்சார்(எண், தகவல்_மொழி)
    } else if (வகை === 'அடிமானம்') {
      return எண்ணுக்கு_அடிமானம்(எண், தகவல்_மொழி['குறிகள்'], தகவல்_மொழி['அடிமானங்கள்'])
    } else {
      throw Error(`தெரியாத எண்ணுரு முறைமை வகை ${வகை}`)
    }
}