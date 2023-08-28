new Vue({
    el: '#app',
    data: {
      questions: [
        {
          image: 'img/Question1.png',
          text: 'Frage 1: Welche Antwort entspricht der Abbildung?',
          answers: ['Auf', 'Hinten', 'Neben', 'In'],
          correctIndexes: [3]
        },
        {
          image: 'img/Question2.png',
          text: 'Frage 2: Welche Antwort entspricht der Abbildung?',
          answers: ['An', 'Vor', 'Zwischen', 'Unter'],
          correctIndexes: [0]
        },
        {
          image: 'img/Question3.png',
          text: 'Frage 3: Welche Antwort entspricht der Abbildung?',
          answers: ['Unter', 'Auf', 'Neben', 'In'],
          correctIndexes: [1]
        },
        // Добавьте остальные вопросы аналогично
      ],
      currentQuestionIndex: 0,
      selectedAnswers: [],
      correctCount: 0,
      wrongCount: 0
    },
    methods: {
      checkAnswer() {
        const correctIndexes = this.questions[this.currentQuestionIndex].correctIndexes;
        const selectedIndexes = this.selectedAnswers;

        if (this.arrayEquals(correctIndexes, selectedIndexes)) {
          this.correctCount++;
        } else {
          this.wrongCount++;
        }

        this.nextQuestion();
        this.selectedAnswers = [];
      },
      nextQuestion() {
        this.currentQuestionIndex++;
      },
      arrayEquals(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
        }
        return true;
      }
    }
  });