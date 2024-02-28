// const component: [string] = [
//    'Button'
// ]
// type TSave = {
//    'flowbite-react': [string[]]
// }
// export default function autoImportComponentFlowbite(): TSave {

//    return {
//       'flowbite-react': component.reduce<[string[]]>((pre: [string[]], cur: string) => {
//          pre.push([cur, cur])
//          return pre
//       }, [[]])
//    }

// }

const component = [
   'Button'
]

export default function autoImportComponentFlowbite() {

   return {
      'flowbite-react': component.reduce((pre, cur) => {
         pre.push([cur, cur])
         return pre
      }, [[]])
   }

}