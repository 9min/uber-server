import { Gretting } from '../../../types/graphql';
const resolvers = {
  Query: {
    sayHello: (): Gretting => {
      return {
        text: 'Hey Hello how are you',
        error: false,
      }
    }
  }
};

export default resolvers;
