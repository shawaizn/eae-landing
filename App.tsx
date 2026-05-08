import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AIEducationLanding } from './AIEducationLanding';
import { ProgramCurriculum } from './ProgramCurriculum';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AIEducationLanding />} />
        <Route path='/curriculum' element={<ProgramCurriculum />} />
        <Route path='/program-curriculum' element={<ProgramCurriculum />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}
