export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'get_random_block_id' : IDL.Func([], [IDL.Text], []),
    'get_random_number' : IDL.Func([], [IDL.Nat64], []),
    'get_random_uuid' : IDL.Func([], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
