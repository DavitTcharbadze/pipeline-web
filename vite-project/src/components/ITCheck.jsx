import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  CheckCircle2,
  ChevronRight,
  Mail,
  Server,
} from 'lucide-react';
import classes from '../modules/ITCheck.module.scss';

const ITCheck = ({ t }) => {
  const data = t.itCheckPage;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [employees, setEmployees] = useState(50);
  const [hours, setHours] = useState(2);

  const estimatedLoss = employees * hours * 75;
  const isFinished = step >= data.questions.length;

  const score = useMemo(() => {
    const total = answers.reduce((sum, answer) => sum + answer.points, 0);
    return Math.max(25, Math.round((total / (data.questions.length * 25)) * 100));
  }, [answers, data.questions.length]);

  const resultLabel = useMemo(() => {
    if (score >= 85) return data.results.good;
    if (score >= 65) return data.results.medium;
    return data.results.risk;
  }, [score, data.results]);

  const handleAnswer = (option) => {
    setAnswers((prev) => [...prev, option]);
    setStep((prev) => prev + 1);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
  };

  const currentQuestion = data.questions[step];
  const progress = isFinished ? 100 : Math.round((step / data.questions.length) * 100);

  return (
    <main className={classes['page']}>
      <section className={classes['hero']}>
        <div className={classes['hero-bg']}></div>

        <div className={classes['hero-container']}>
          <motion.div
            className={classes['hero-content']}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className={classes['eyebrow']}>{data.hero.kicker}</span>
            <h1>{data.hero.title}</h1>
            <p>{data.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className={classes['check-section']}>
        <div className={classes['check-card']}>
          <div className={classes['left-panel']}>
            <span className={classes['pill']}>
              <Activity size={15} />
              {data.badge}
            </span>

            <h2>{data.check.title}</h2>
            <p>{data.check.text}</p>

            <div className={classes['benefits']}>
              {data.check.benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 size={19} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={classes['quiz-panel']}>
            {!isFinished ? (
              <>
                <div className={classes['quiz-top']}>
                  <span>
                    {data.questionLabel} {step + 1} {data.ofLabel} {data.questions.length}
                  </span>
                  <strong>{progress}%</strong>
                </div>

                <div className={classes['progress']}>
                  <span style={{ width: `${progress}%` }}></span>
                </div>

                <h3>{currentQuestion.question}</h3>

                <div className={classes['options']}>
                  {currentQuestion.options.map((option) => (
                    <button key={option.label} onClick={() => handleAnswer(option)}>
                      <span>{option.label}</span>
                      <ChevronRight size={19} />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className={classes['result-box']}>
                <span>{data.results.scoreLabel}</span>
                <strong>{score}</strong>
                <small>{data.results.outOf}</small>

                <h3>{resultLabel}</h3>
                <p>{data.results.text}</p>

                <a href="/contact" className={classes['result-button']}>
                  {data.results.button}
                  <Mail size={18} />
                </a>

                <button className={classes['restart']} onClick={handleRestart}>
                  {data.results.restart}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={classes['tools-section']}>
        <div className={classes['tools-grid']}>
          <div className={classes['calculator-card']}>
            <span className={classes['tool-pill']}>{data.calculator.kicker}</span>
            <h2>{data.calculator.title}</h2>
            <p>{data.calculator.subtitle}</p>

            <div className={classes['slider-group']}>
              <div className={classes['slider-head']}>
                <label>{data.calculator.employees}</label>
                <strong>{employees}</strong>
              </div>

              <input
                type="range"
                min="1"
                max="250"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
              />
            </div>

            <div className={classes['slider-group']}>
              <div className={classes['slider-head']}>
                <label>{data.calculator.hours}</label>
                <strong>{hours} h</strong>
              </div>

              <input
                type="range"
                min="1"
                max="24"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
            </div>

            <div className={classes['loss-box']}>
              <span>{data.calculator.resultLabel}</span>
              <strong>€ {estimatedLoss.toLocaleString('de-DE')}</strong>
              <small>{data.calculator.basis}</small>
            </div>
          </div>

          <div className={classes['monitor-card']}>
            <span className={classes['live-pill']}>
              <span></span>
              {data.monitor.live}
            </span>

            <h2>{data.monitor.title}</h2>
            <p>{data.monitor.subtitle}</p>

            <div className={classes['server-list']}>
              {data.monitor.systems.map((system) => (
                <div key={system.name}>
                  <span className={classes['dot']}></span>
                  <code>{system.name}</code>
                  <strong>{system.status}</strong>
                  <small>{system.time}</small>
                </div>
              ))}
            </div>

            <p className={classes['monitor-note']}>{data.monitor.note}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ITCheck;