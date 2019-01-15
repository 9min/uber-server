import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  Entity,
} from 'typeorm';

import Message from './Message';

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany(type => Message, message => message.chat)
  messages: Message[];

  @CreateDateColumn() createAt: string;
  @CreateDateColumn() updateAt: string;
}

export default Chat;
