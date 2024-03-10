Vue.createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0

    };
  },
  methods: {
    calculate() {
      switch (this.operation) {
        case '+':
          this.add();
          break;
        case '-':
          this.substract();
          break;
      }
    },
    add() {
      this.result = this.num1 + this.num2;
    },
    substract() {
      this.result = this.num1 - this.num2;
    }

  }





}).mount('#app')