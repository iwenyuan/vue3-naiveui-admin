import type { FormItemRule } from 'naive-ui'

// 手机号校验
export const checkPhone = (rule: FormItemRule, value: string) => {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(value)
}

// 密码校验
export const checkPassword = (rule: FormItemRule, value: string) => {
  // 密码必须包含大小写字母和数字，不能包含特殊字符，长度在8-20之间
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/
  return reg.test(value)
}

// 邮箱校验
export const checkEmail = (rule: FormItemRule, value: string) => {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return reg.test(value)
}

// 身份证校验
export const checkIdCard = (rule: FormItemRule, value: string) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg.test(value)
}
