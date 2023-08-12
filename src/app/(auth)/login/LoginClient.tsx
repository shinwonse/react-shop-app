'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import LogoPath from '@/assets/colorful.svg';
import Loader from '@/components/Loader/Loader';

import styles from './Auth.module.scss';

function LoginClient() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => router.push('/');

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image alt="logo" priority src={LogoPath} />
          </h1>
          <form className={styles.form} onSubmit={loginUser}>
            Input
            {/* Input */}
            <div className={styles.group}>
              {/* 자동 로그인, 비밀번호 수정 */}자동 로그인, 비밀번호 수정
            </div>
            <div>
              {/* Button */}
              Button
              <div>{/* Button */}Button</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default LoginClient;
