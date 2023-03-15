export const baseComponent = [{
  id: 1,
  name: 'AppButton',
  text: [
    'Thêm class để style btn',
    'Custom click event'
  ]
},
{
  id: 2,
  name: 'AppBadge',
  text: [
    'sub: số ở trên',
    'content: nội dung ở dưới',
    'slot: slot',
  ]
},
{
  id: 3,
  name: 'AppInput',
  text: [
    'v-model ',
    'type: type của input',
    'placeholder',
  ]
},
]
export const commentData = {
  user: {},
  content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
}
function padTo2Digits(num: any) {
  return num.toString().padStart(2, '0');
}

export function parseDate(date: any) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('-');
}
export function jsonFilter(json: any) {
  return json.filter((c: any, index: any) => {
    if (c instanceof Object) {
      c.id = index;
      return true;
    } else return false;
  })
}