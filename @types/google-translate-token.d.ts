declare module 'google-translate-token' {
    function get(
      text: string,
      options?: { tld?: string }
    ): Promise<{ name: string; value: string }>;
  
    const token: {
      get: typeof get;
    };
  
    export = token;
  }
  