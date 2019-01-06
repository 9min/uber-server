import { SayHelloResponse, SayHelloQueryArgs } from '../../../types/graphql';
const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        text: `Hello ${args.name}`,
        error: false,
      }
    }
  }
};

export default resolvers;
