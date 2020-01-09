/**
 * Example store structure
 */
const store = {
    // 5 or more questions are required
    questions: [
      {
        question: 'What kind of animal was Harry Potter\'s enchanted pet?',
        answers: [
          'owl',
          'stag',
          'rat',
          'cat'
        ],
        correctAnswer: 'owl'
      },
      {
        question: 'What was Harry\'s patronus?',
        answers: [
          'stag',
          'doe',
          'rhino',
          'rat'
        ],
        correctAnswer: 'stag'
      }
      {
        question: 'What was Snape\'s patronus?',
        answers: [
          'owl',
          'stag',
          'rat',
          'doe'
        ],
        correctAnswer: 'doe'
      },
      {
        question: 'What fictional race is Hagrid?',
        answers:[
          'half-ogre',
          'all man',
          'giant',
          'half-giant'
        ],
        correctAnswer: 'half-giant'
      },
      {
        question: 'Who Guarded Azkaban?',
        answers:[
          'united states military!',
          'dementors',
          'azkban dragons',
          'ghost'
        ],
        correctAnswer: 'dementors'
      },
    ],
    questionNumber: 0,
    score: 0
    
  };
  
  /**
   *
   * Your app should include a render() function, that regenerates
   * the view each time the store is updated. See your course
   * material, consult your instructor, and reference the slides
   * for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   */