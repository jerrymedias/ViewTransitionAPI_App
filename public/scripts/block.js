const block = async () => {

  const searchParams = new URLSearchParams(window.location.search);
  const interval = searchParams.get('t') || 1000;

  return await new Promise((resolve) =>
    setTimeout(() => {
        resolve("interval " + interval);
    }, interval)
  );
};

setTimeout(() => {block();}, 2550);
