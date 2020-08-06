class Validate {
  init(form, rules) {
    if (!this.isObject(rules)) {
      throw new Error('验证规则不是对象集合');
    }
    this.form = form;
    this.rules = rules;
    this.errMsg = []; // 错误集合
    return this.validateForm();
  }

  validateForm() {
    const verifyList = []; // 验证集合
    const rulesKeys = Object.keys(this.rules);
    rulesKeys.forEach(key => {
      if (this.hasOwn(this.form, key)) {
        const cell = this.validateCell(key);
        verifyList.push(cell);
      } else {
        console.log(`表单未添加验证字段${key}`);
      }
    });
    // 验证
    return new Promise(resolve => {
      Promise.all(verifyList).then(res => {
        resolve(true);
      }).catch(error => {
        wx.showToast({
          title: this.errMsg[0],
          icon: 'none',
          duration: 2000
        });
        resolve(false);
      });
    });

  }

  validateCell(prop) {
    return new Promise((resolve, reject) => {
      const val = this.form[prop]; // form value
      const rules = this.rules[prop]; // rules arr
      if (!Array.isArray(rules)) {
        throw new Error('rules is not Array');
      }
      for (let index = 0; index < rules.length; index++) {
        const rule = rules[index];
        // 如果表单值必填
        if (rule.required && !val) {
          this.errMsg.push(rule.message);
        }
        // 表单值需要根据正则判断
        if (rule.regx && !rule.regx.test(val)) {
          this.errMsg.push(rule.message);
        }    
      }
      if (this.errMsg.length > 0) {
        reject(false);
      } else {
        resolve(true);
      }
    })
  }

  hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }
}

const validate = new Validate();

module.exports = validate.init.bind(validate);