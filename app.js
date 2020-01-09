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
        correctAnswer: 'owl',
        image: 'owl.jpg',
        alt: 'snowy owl Hedwig',
        explanation: 'Harry Potter\'s pet was an owl named Hedwig'
      },
      {
        question: 'What was Harry\'s patronus?',
        answers: [
          'stag',
          'doe',
          'rhino',
          'rat'
        ],
        correctAnswer: 'stag',
        image: 'stag.jpg',
        alt: 'Stag patronus',
        explanation: 'Harry Potter had a stag as his patronus'
      }
      {
        question: 'What was Snape\'s patronus?',
        answers: [
          'owl',
          'stag',
          'rat',
          'doe'
        ],
        correctAnswer: 'doe',
        image: 'doe.jpg',
        alt: 'Doe patronus',
        explanation: 'His patronus is a doe, much like Harry\'s mother\'s patronus'
      },
      {
        question: 'What fictional race is Hagrid?',
        answers:[
          'half-ogre',
          'all man',
          'giant',
          'half-giant'
        ],
        correctAnswer: 'half-giant',
        image: 'hagrid.jpg',
        alt: 'Hagrid the groundskeeper',
        explanation: 'Hagrid is a half-giant. His mother is a giant and his father is human'
      },
      {
        question: 'Who Guarded Azkaban?',
        answers:[
          'united states military!',
          'dementors',
          'azkban dragons',
          'ghost'
        ],
        correctAnswer: 'dementors',
        image: 'dementor.jpg',
        alt: 'The soul sucking Dementor; guardian of Azkaban',
        explanation: 'The soul sucking Dementor; guardian of Azkaban'
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