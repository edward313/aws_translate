export class TranslateText{
    SourceLanguageCode:string /* required */
      TargetLanguageCode: string /* required */
      Text: string
      TranslatedText:string
       /* required */
      

      constructor(sourceLanguageCode:string,TargetLanguageCode: string,Text:string)
      {
          this.SourceLanguageCode=sourceLanguageCode
          this.TargetLanguageCode=TargetLanguageCode
          this.Text=Text
          this.TranslatedText=''
      }
}
