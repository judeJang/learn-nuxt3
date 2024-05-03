/**
 * router error 설정
 *
 * /api/error 접근 시 반영
 *
 */

export default eventHandler(() => {
  // return 'Hello Nuxt3!'; // content type= text/html
  // return {
  //   message: 'Hello Nuxt3!', // content type= application/json
  // };

  throw createError({
    statusCode: 404,
    statusMessage: `페이지를 찾을 수 없습니다.`,
  });
});
