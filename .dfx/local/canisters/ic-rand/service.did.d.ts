import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'get_random_block_id' : ActorMethod<[], string>,
  'get_random_number' : ActorMethod<[], bigint>,
  'get_random_uuid' : ActorMethod<[], string>,
}
