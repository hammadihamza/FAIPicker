const form = document.getElementById('FAIForm')
const numberPhone = document.getElementById('numberPhone')
const submitBtn = document.getElementById('submitBtn')

form.addEventListener('submit',e =>{
    e.preventDefault();

    const result = document.createElement('div')
    result.classList.add('Result')
    switch (numberPhone.value) {
        case '0600': case '0601': case '0602': case '0603': case '0604': case '0605': case '0606': case '0607': case '0608': case '0609':
            case '0626': case '0627': case '0629': case '0630': case '0633': case '0634': case '0635': case '0638': case '0640': case '0646':
                case '0647': case '0680': case '0681': case '0687': case '0690': case '0695': case '0698': case '0699': case '0700': case '0701': case '0702': case '0703': case '0704': case '0705': 
                    case '0706': case '0707': case '0708': case '0709': case '0710': case '0711': case '0712': case '0713': 
            result.innerText = "INWI";
            form.appendChild(result)
            result.setAttribute('title', 'click to delete')
          break;
          case '0610': case '0611': case '0613': case '0615': case '0616': case '0618': case '0622': case '0623': case '0624': case '0628':
            case '0636': case '0637': case '0639': case '0641': case '0642': case '0643': case '0648': case '0650': case '0651': case '0652':
                case '0653': case '0654': case '0655': case '0658': case '0659': case '0661': case '0662': case '0666':
                    case '0667': case '0668': case '0670': case '0671': case '06572': case '0673': case '0676': case '0677':
                        case '0678': case '0689': case '0696': case '0697': case '0761': case '0762': case '0766': case '0767':
            result.innerText = "IAM";
            form.appendChild(result)
            result.setAttribute('title', 'click to delete')
          break;
          case '0612': case '0614': case '0617': case '0619': case '0620': case '0621': case '0625': case '0631':  case '0632':
            case '0644': case '0645': case '0649': case '0656': case '0657': case '0660': case '0663': case '0664': case '0665': case '0669':
                case '0674': case '0675': case '0679': case '0688': case '0691': case '0693': case '0694': case '0770': case '0771': case '0772': case '0773': case '0774': case '0775': case '0777':
            result.innerText = "ORANGE";
            form.appendChild(result)
            result.setAttribute('title', 'click to delete')
          break;
          default:
              alert('numero non valid ou non disponible ou ne respecte pas la forme : 05XX / 06XX / 07XX')
      }

      result.addEventListener('click',()=>{
          result.remove()
      })
})
    
