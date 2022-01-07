# Madaxa HTMLka (html head)
Dhamaan HTML documentiga waxa uu ka koobanyahay 2bo qeybood oo kala ah
* Qeybta madaxa (head)
* Qeybta dhexe (body)

Markii aad booqato website dhamaan sawirada, muqaalada iyo qoraalada aad aragto waxaa lagu qoraa qeybta dhexe (body). Lakiin madaxa(head) lamid ma'ahan qeybta dhexe oo xogtiisa lamaa daabaco balse waxa uu barrowsarka ka caawiyaa in uu u sheego 🔊 faahfaahin ku saabsan websiteka iyo shaqada uu qabto 
>💡 \
>Madaxa (head) waxa lagu dhex qoraa wax walba oo faafaahin ah kuna saabsan websiteka
## sidee loo qoraa ?
Sidaad horey ugu soo aragtay dhammaan xogta websiteka waxaa lagu dhex qoraa gudaha **elementiga HTML**. Sidaas darteed  gudaha tagga **HTMLka** waxaad ku dhex qortaa ``head`` element

📖 Tusaale
```html
<!DOCTYPE html>
<html>
  <head>Faafaahinta websiteka...</head>
</html>
```
## maxaa ka mid ah qoraalada lagu qoro madaxa

1. ### Magaca bogga la daabici rabo
Haddii aad **youtubeka** ka gasho barrowsarka, qeybta kore ee barrowserka waxaad ka arkeysaa ``magaca`` iyo ``logada`` youtubeka
![youtube tag](https://www.addictivetips.com/app/uploads/2017/04/number-on-youtube-tab.jpg)
Taas waxaa ku shaqo leh tagga la dhaho ``Title`` waxaana loo qoraa sidaan
```html
<title>Magaca bogga</title>
```
>✏️ Fadlan **taggaan** ku qor gudaha **tagga** madaxa ama **headka**

2. ### Faahfaahinta bogga
In aad faahfaahin ka bixiso bogga aad daabici rabto waxey ay kaa caawineysaa in haddii qof baaro xogtaas qeyb ka mid ah uu **googlega** ku hagi doono qofkaas websitekaaga boggiisa madaama uu ogyahay xogta ku jirto boggaas ey tahay midda uu qofku raadinaayo.
📖 Tusaale
Waxaan rabaa in aan bogeyga ku qoro cashar ku saabsan HTMLka, sidaas darteed ``head elementiga`` ayaa ku dhex qorayaa taggaan.
```html
<meta name='description' content='Faahfaahin ku saabsan boggaas' />
```
Sidoo kale waxaan raacinayaa ereyada aan is dhahaayo userka wuu search gareen donnaa. Si' aan taas u sameeyo waxaan qoraay taggaan kale
```html
<meta name='keywords' content='baro html cashar' />
```
Tani waxa ay kaa caawinaysaa in haddii qofka baaraya casharada **HTMLka** uu qoro ereyadaas mid ka mid ah loo soo daabici doonno boggaada.

``meta tag`` waxaa kaloo ay kaa caawisaa in haddii **linkiga** boggaaga loo diro qof uu ugu horeyn arki doono faahfaahinta bogga losoo diray.

📖 Tusaale \
Haddii aan qof u diro linkiga **channel** , qofka loo diray **linkiga** waxa uu u arki doona linkiga sidaan

![ogaansho channel](https://i.ibb.co/bKXX5w6/screenbud-bc3de8aa-b1d2-4ec8-afa6-270c28bf886a.png)
### sidey ku dhacday arrintaan
Shirkadaa youtubeka markii ay boggeeda ku daabacayso channel, waxa ay boggaas cinwaan uga dhigtaa magaca channelka, sidoo kale waxa ay faahfaahin uga dhigtaa faahfaahinta uu qofku ka baxsho channelkiis

Sidaas darteed cinwaanka bogga waxaa laga dhigay magaca youtubeka, sawirkana waxaa laga dhigay **loogada** halka faahfaahinta bogga laga dhigay faah-faahinta uu channelkiisa ka baxshey.
Sidaas darteed markii aad linkiga dirtid, ugu horeyn waxaa la fiirindoona, bogga la daabici rabo cinwaankisu muxuu yahay kadibna qofka la tusaa cinwaanka bogga losoo diray, waxaana dabo socda faahfaahinta iyo haddii sawir ku jiro.
### muxuu ka koobanyahay meta tagga ?
```html
<meta name='keywords' content='baro html cashar' />
```
* name: magacu waa sifo (attribute), kadibna waxaad sheegaysa safidaas magaceeda tusaale `keywords` oo ah taggaas waxaa uu yahay
* content: waa xogta aad ku qoreyso safida aad sheegtay
>⚠️ iska ilaali \
Sifooyinka ay leedahay `meta tagga` ma'ahan mid aad adigu iska keensaneyso ee waxa ay ku timaada HTMLka. Haddaad inaad waxbadan kasii ogaatid boogo [Magacyada meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name)

3.Iyo kuwa kale oo badan.
___
```html
!<DOCTYPE html>
<html>
  <head>
    <meta name='description' content='Faahfaahin ku saabsan boggaas' />
    <meta name='keywords' content='baro html cashar' />
    <meta name="viewport" content="width=device-width, minimum-scale=1" />
  </head>
</html>
```