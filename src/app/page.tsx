import GenerateCustomRandomString from "@/hooks/useGenerateCustomRandomString";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Welcome to the Home Page</h1>
      <p>
        All Big Letters (length 10):{" "}
        {GenerateCustomRandomString(10, { uppercase: true })}{" "}
      </p>
      <p>
        Numbers only (length 8):{" "}
        {GenerateCustomRandomString(8, { numbers: true })}
      </p>
      <p>
        Lowercase and Numbers (length 15):{" "}
        {GenerateCustomRandomString(15, { lowercase: true, numbers: true })}
      </p>
      <p>
        Special Chars and Uppercase (length 12):{" "}
        {GenerateCustomRandomString(12, {
          specialChars: true,
          uppercase: true,
        })}
      </p>
      <p>
        Custom Hex Characters (length 16):{" "}
        {GenerateCustomRandomString(16, { customChars: "0123456789ABCDEF" })}
      </p>
      <p>
        Default (no options specified, length 14):{" "}
        {GenerateCustomRandomString(14)}
      </p>
      <p>
        Password-like (length 16, all types):{" "}
        {GenerateCustomRandomString(16, {
          uppercase: true,
          lowercase: true,
          numbers: true,
          specialChars: true,
        })}
      </p>
    </div>
  );
};

export default HomePage;
