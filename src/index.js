const { createInstance, SepoliaConfig } = require('@zama-fhe/relayer-sdk/node');

async function main() {
  // TODO: pass from python all the necessary parameters: process.argv.slice(2);

  const instance = await createInstance(SepoliaConfig);

  // We first create a buffer for values to encrypt and register to the fhevm
  const buffer = instance.createEncryptedInput(
    '0x0000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000',
  );

  buffer.add64(BigInt(23393893233));
  buffer.add64(BigInt(1));

  const ciphertexts = await buffer.encrypt();

  console.log(ciphertexts);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
