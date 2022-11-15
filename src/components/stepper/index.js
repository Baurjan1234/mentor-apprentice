import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import "./style.css";

const steps = [
  {
    label: "Бидний тухай",
    description: `ШУТИС-МХТС сургуулийн Mentor&Apprentice клуб. Клуб нь ШУТИС-МХТС оюутнууд өөрсдийгөө технологийн боловсролоор хөгжүүлэхэд зориулагдсан болно.`,
  },
  {
    label: "Үнэт зүйл",
    description:
      "Шинэ санааг илэрхийлэх, судлах, танин мэдэх, бүтээх. Сурж мэдсэн зүйлээ бусаддаа хуваалцах, бусдаас суралцах. Mentor, mentee-ны харилцаа холбоо.",
  },
  {
    label: "Алсын хараа",
    description: `Оюутан залуусын шинжлэх ухаанч сэтгэлгээг хөгжүүлж, оюутнуудын харилцан туршлага солилцох орчинг бүрдүүлж, хаана ч өрсөлдөхүйц мэргэшсэн боловсон хүчин болоход бэлтгэгдэн гарах гүүрийн нэг байх нь клубын эрхэм зорилго юм.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="stepper" id="about">
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel className="stepLabel">
                <h1>{step.label}</h1>
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "" : "Үргэлжлүүлэх"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Буцах
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 2 }}>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Буцах
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
